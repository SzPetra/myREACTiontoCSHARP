using CodeToGiveTests.services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddSingleton<EmailHostedService>();
builder.Services.AddHostedService(provider => provider.GetService<EmailHostedService>());


/*builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsAllowAll",
        builder =>
        {
            builder
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials();
        });

    options.AddPolicy("CorsAllowSpecific",
        p => p.WithHeaders("Content-Type", "Accept", "Auth-Token")
            .WithMethods("POST", "PUT", "DELETE")
            .SetPreflightMaxAge(new TimeSpan(1728000))
            .AllowAnyOrigin()
            .AllowCredentials()
        );
});*/
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
	/*options.AddDefaultPolicy(
		builder =>
		{
			builder.WithOrigins("http://localhost: 44490");
		});*/
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
	// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
	app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseCors();


app.MapControllerRoute(
	name: "default",
	pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
