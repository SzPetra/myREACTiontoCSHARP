namespace CodeToGiveTests.Models
{
    public class EmailModel
    {
        public string EmailAdress { get; set; }= String.Empty;
        public string Subject { get; set; } = String.Empty;
        public string Body { get; set; } = String.Empty;
        public List<EmailAttachment> Attachments { get; set; }

    }
}
