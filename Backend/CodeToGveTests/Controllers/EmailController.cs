using Microsoft.AspNetCore.Mvc;
using CodeToGiveTests.services;
using CodeToGiveTests.Models;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Cors;
using CodeToGiveTests.Encryption;

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
            await _emailHostedService.SendEmailAsync(new EmailModel
            {
                EmailAdress = payload.Email,
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
            string testlink = "https://localhost:44490/" + StringCrypter.Encrypt(payload.TestUrl);
            Console.WriteLine(payload);
            await _emailHostedService.SendEmailAsync(new EmailModel
            {
                EmailAdress = payload.Email,
                Subject = $"{payload.Name}'s Test Results",
                Body = $"You can fnd the test results in the attachment",
                Attachments = null
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
    }
}
