using Mailjet.Client;
using Mailjet.Client.Resources;
using System;
using Newtonsoft.Json.Linq;
using CodeToGiveTests.Interfaces;
using CodeToGiveTests.Models;

namespace CodeToGiveTests.services
{
    public class MailJetProvider : EmailSenderService, IEmailSender
    {
        protected override async Task Send(EmailModel email)
        {
            try
            {
                JArray jArray = new JArray();
                JArray attachments = new JArray();
                if(email.Attachments != null && email.Attachments.Count() > 0)
                {
                    email.Attachments.ToList().ForEach(attachment => attachments.Add(
                        new JObject
                        {
                            new JProperty("Content-type", attachment.ContentType),
                            new JProperty("Filename", attachment.Name),
                            new JProperty("Content", Convert.ToBase64String(attachment.Data))
                        }
                        ));
                }
                jArray.Add(new JObject
                {
                    new JProperty("FromEmail", "myreactiontocsharp@gmail.com"), //Email registered with mailJet
                    new JProperty("FromName", "Code To Give"),
                    new JProperty("Recipients", new JArray
                    {
                        new JObject
                        {
                            new JProperty("Email", email.EmailAdress),
                            new JProperty("Name", email.EmailAdress)
                        }
                    }),
                    new JProperty("Subject", email.Subject),
                    new JProperty("Text-part", email.Body),
                    new JProperty("Html-part", email.Body),
                    new JProperty("Attachments", attachments)

                });
                var client = EmailSenderService.CreateMailJetClient();
                var request = new MailjetRequest
                {
                    Resource = Mailjet.Client.Resources.Send.Resource
                }
                .Property(Mailjet.Client.Resources.Send.Messages, jArray);
                var response = await client.PostAsync(request);
                Console.WriteLine($"Send result {response.StatusCode} with message {response.Content}");
            }catch(Exception ex)
            {
                Console.WriteLine(ex.Message.ToString());
            }
        }
    }
}
