namespace CodeToGiveTests.Models
{
    public class EmailAttachment
    {
        public string Name { get; set; } = String.Empty;
        public string ContentType { get; set; } = String.Empty;

        public byte[] Data { get; set; } = new byte[0];
    }
}
