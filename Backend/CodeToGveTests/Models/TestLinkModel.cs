namespace CodeToGiveTests.Models
{
    public class TestLinkModel
    {
        public string Name { get; set; }
        public string ViewMode { get; set; }
        public string TestType { get; set; }
        public TestLinkModel(string decryptedString)
        {
            var strings = decryptedString.Split('+');
            Name = strings[0];
            ViewMode = strings[1];
            TestType = strings[2];
        }
    }

}
