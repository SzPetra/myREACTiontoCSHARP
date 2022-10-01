using CodeToGiveTests.Interfaces;
using CodeToGiveTests.Models;
using Mailjet.Client;

namespace CodeToGiveTests.services
{
    public abstract class EmailSenderService : IEmailSender
    {
        public static MailjetClient CreateMailJetClient()
        {
            return new MailjetClient("4ea34862af42c11c845a4e733642ee31", "9ae9b242fcff2e7bf6ff6d374dac0ff4");
        }
        protected abstract Task Send(EmailModel email);
        public async Task SendEmail(EmailModel emailModel)
        {
            await Send(emailModel);
        }

        public async Task SendEmail(string address, string subject, string body, List<EmailAttachment>? emailAttachment = null)
        {
            await Send(new EmailModel
            {
                Attachments = emailAttachment!,
                Body = body,
                EmailAdress = address,
                Subject = subject,

            });
        }
    }
}
