using CodeToGiveTests.Interfaces;
using CodeToGiveTests.Models;
using Mailjet.Client;

namespace CodeToGiveTests.services
{
    public abstract class EmailSenderService : IEmailSender
    {
        public static MailjetClient CreateMailJetClient()
        {
            return new MailjetClient("4ea34862af42c11c845a4e733642ee31", "43562677332005a43d1da7deb53ca477");
            //return new MailjetClient("63aa1561aba97d8b079e441f8d9dbcb4", "293bac4932089534cb94fbc39487ea9a");
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
