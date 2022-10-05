using CodeToGiveTests.services;
using SessionExtensions = CodeToGiveTests.services.SessionExtensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddSingleton<EmailHostedService>();
builder.Services.AddHostedService(provider => provider.GetService<EmailHostedService>());

builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession();

/*builder.Services.Configure<CookiePolicyOptions>(options =>
{
	// This lambda determines whether user consent for non-essential cookies is needed for a given request.
	options.CheckConsentNeeded = context => false;
	options.MinimumSameSitePolicy = SameSiteMode.None;
});*/

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
	options.AddPolicy("Policy1",
		policy =>
		{
			policy.WithOrigins("*",
								"*")
				.AllowAnyHeader()
				.AllowAnyMethod();
		});

	options.AddPolicy("AnotherPolicy",
		policy =>
		{
			policy.WithOrigins("*")
								.AllowAnyHeader()
								.AllowAnyMethod();
		});
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseSession();

app.MapControllers();

app.Run();
