namespace CodeToGiveTests.Models
{
    public class TestLinkModel
    {
        public string Name { get; set; }
        public string ViewMode { get; set; }
        public string TestType { get; set; }
        public TestLinkModel(string decryptedString)
        {
            var strings = decryptedString.Split('/');
			Console.WriteLine("|" + strings[0] + "|");
			Console.WriteLine("|" + strings[1] + "|");
			Console.WriteLine("|" + strings[2] + "|");
            Name = strings[0];
            ViewMode = strings[1];
            TestType = strings[2];
        }
    }

}
