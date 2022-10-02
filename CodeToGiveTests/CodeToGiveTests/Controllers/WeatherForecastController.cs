using Microsoft.AspNetCore.Mvc;
using CodeToGiveTests.Encryption;

namespace CodeToGiveTests.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class WeatherForecastController : ControllerBase
	{

		private string _data {get;set;}
		private static readonly string[] Summaries = new[]
		{
		"Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
		};

		private readonly ILogger<WeatherForecastController> _logger;

		public WeatherForecastController(ILogger<WeatherForecastController> logger)
		{
			_logger = logger;
		}

		[HttpGet]
		public IEnumerable<WeatherForecast> Get()
		{
			return Enumerable.Range(1, 5).Select(index => new WeatherForecast
			{
				Date = DateTime.Now.AddDays(index),
				TemperatureC = Random.Shared.Next(-20, 55),
				Summary = StringCrypter.Encrypt("tutya")//StringCipher.Encrypt("username=John", "tutya27")//Summaries[Random.Shared.Next(Summaries.Length)]
			})
			.ToArray();
		}

		[HttpGet("{id}")]
		public ActionResult<string> GetAlle()
		{
			return _data;
		}


		[HttpPost]
		public ActionResult<string> GetAlles([FromBody] string payload)
		{
			var c = StringCrypter.Encrypt(payload);
			_data = c;
			_logger.LogInformation(c);
			return Ok(c);
		}
	}
}