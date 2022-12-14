using Microsoft.AspNetCore.Mvc;
using CodeToGiveTests.services;
using CodeToGiveTests.Models;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Cors;
using CodeToGiveTests.Encryption;
using PdfSharp.Pdf;
using CodeToGveTests.PDFGeneration;
using SessionExtensions = CodeToGiveTests.services.SessionExtensions;
using CodeToGveTests.Models;

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

   
            string adminEmail = payload.AdminEmail;
            SessionExtensions.SetObjectAsJson(HttpContext.Session, "adminEmail", adminEmail);

	
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
        public async Task<ActionResult<dynamic>> SendEmailWithTestResult([FromBody] TestResultModel payload)
        {
            var adminEmail = SessionExtensions.GetObjectFromJson<string>(HttpContext.Session, "adminEmail");

            PdfGenerator.GeneratePdf(payload);
            string testType = "Chair-lamp test";

            await _emailHostedService.SendEmailAsync(new EmailModel
            {
                EmailAdress = "kislorand270@gmail.com",//adminEmail,
                Subject = $"{payload.Name}'s Test Results",
                Body = $"You can fnd the test results in the attachment",
                Attachments = new List<EmailAttachment>() 
                    { 
                    new EmailAttachment() 
                        { 
                            Name="testPdf",
                            ContentType="application/pdf",
                            Data=System.IO.File.ReadAllBytes($"../CodeToGveTests/PdfStorage/{payload.Name}_{testType}.pdf")
                        }  
                    }
            });
            return Ok(payload);
        }

        [EnableCors("AnotherPolicy")]
        [Route("DecryptUrl")]
        [HttpGet]
        public ActionResult<dynamic> SendEmailWithTestResult([FromQuery] string payload)
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
			var testModel = new TestResultModel() 
            { 
                Name = "Huba", 
                ClientEmail = "", 
                TestData = "attempt 1 : 4\nattempt 2 : 54\nattempt 3 : 120\nTotal : 178\nChair-lamp test" 
            };
			PdfGenerator.GeneratePdf(testModel);
			
			return true;
		}
	}
}
