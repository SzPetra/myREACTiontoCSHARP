﻿using Microsoft.AspNetCore.Mvc;
using CodeToGiveTests.services;
using CodeToGiveTests.Models;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Cors;
using CodeToGiveTests.Encryption;
using PdfSharp.Pdf;
using CodeToGveTests.PDFGeneration;
using SessionExtensions = CodeToGiveTests.services.SessionExtensions;

namespace CodeToGiveTests.Controllers
{
    [EnableCors("Policy1")]
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : Controller
    {
        private EmailHostedService _emailHostedService;

        public EmailController(EmailHostedService hostedService)
        {
            _emailHostedService = hostedService;
        }

        [EnableCors("AnotherPolicy")]
        [Route("SendEmailWithTestLink")]
        [HttpPost]
        public async Task<ActionResult<dynamic>> SendEmailWithTestLink([FromBody] LoadModel payload)
        {
            string testlink = "http://localhost:3000/select-test?data=" + payload.TestUrl;//StringCrypter.Encrypt(payload.TestUrl);

           Console.WriteLine(payload);
            string adminEmail = payload.AdminEmail;
            SessionExtensions.SetObjectAsJson(HttpContext.Session, "email", adminEmail);

			Console.WriteLine(adminEmail);
            await _emailHostedService.SendEmailAsync(new EmailModel
            {
                EmailAdress = payload.ClientEmail,
                Subject = "Link for Test",
                Body =$"Hello {payload.Name}! <br>Click this <a href={testlink}>LINK</a> to start your test.",
                Attachments = null
            });
            return Ok(payload);
        }

        [EnableCors("AnotherPolicy")]
        [Route("SendEmailWithTestResult")]
        [HttpPost]
        public async Task<ActionResult<dynamic>> SendEmailWithTestResult([FromBody] LoadModel payload)
        {
            payload.AdminEmail = SessionExtensions.GetObjectFromJson<string>(HttpContext.Session, "adminEmail");
            //string testlink = "https://localhost:44490/" + StringCrypter.Encrypt(payload.TestUrl);
            Console.WriteLine(payload);
            PdfDocument testPdf = PdfGenerator.GeneratePdf();
            await _emailHostedService.SendEmailAsync(new EmailModel
            {
                EmailAdress = "kislorand270@gmail.com", //payload.AdminEmail,
                Subject = $"{payload.Name}'s Test Results",
                Body = $"You can fnd the test results in the attachment",
                Attachments = new List<EmailAttachment>() 
                    { 
                    new EmailAttachment() 
                        { 
                            Name="testPdf",
                            ContentType="application/pdf",
                            Data=System.IO.File.ReadAllBytes($"../CodeToGveTests/PdfStorage/HelloWorld2.pdf")
                        }  
                    }
            });
            return Ok(payload);
        }

        [EnableCors("AnotherPolicy")]
        [Route("DecryptUrl")]
        [HttpGet]
        public async Task<ActionResult<dynamic>> SendEmailWithTestResult([FromQuery] string payload)
        {
            string decryptedString = payload; // StringCrypter.Decrypt(payload);
			Console.WriteLine(decryptedString);
            TestLinkModel testLinkData = new TestLinkModel(decryptedString);
            return Ok(testLinkData);
        }

        [Route("")]
        [HttpGet]
        public bool SendPDF()
        {
            var pdf = PdfGenerator.GeneratePdf();
            if (pdf == null)
                return false;
            return true;
        }
    }
}
