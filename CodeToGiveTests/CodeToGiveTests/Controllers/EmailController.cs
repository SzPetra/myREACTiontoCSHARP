using Microsoft.AspNetCore.Mvc;
using CodeToGiveTests.services;
using CodeToGiveTests.Models;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Cors;

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
        [Route("SendEmail")]
        //[DisableCors]
        [HttpPost]
        public async Task<ActionResult<dynamic>> SendEmail([FromBody] LoadModel payload)
        {
			Console.WriteLine(payload);
            await _emailHostedService.SendEmailAsync(new EmailModel
            {
                EmailAdress = "petra.szilagyi27@gmail.com",
                Subject = "Hi Test mail",
                Body = $"<strong> HEllo this is the test mail with {payload.Name}",
                Attachments = null
            });
            return Ok(payload);
        }
    }
}
