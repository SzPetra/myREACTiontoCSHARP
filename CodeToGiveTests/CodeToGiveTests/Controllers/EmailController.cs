using Microsoft.AspNetCore.Mvc;
using CodeToGiveTests.services;
using CodeToGiveTests.Models;

namespace CodeToGiveTests.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : Controller
    {
        private EmailHostedService _emailHostedService;
        public EmailController(EmailHostedService hostedService)
        {
            _emailHostedService = hostedService;
        }
        [Route("SendEmail")]
        [HttpGet]
        public async void SendEmail()
        {
            await _emailHostedService.SendEmailAsync(new EmailModel
            {
                EmailAdress = "szabimi12@gmail.com",
                Subject = "Hi Test mail",
                Body = "<strong> HEllo this is the test mail",
                Attachments = null
            });
        }
    }
}
