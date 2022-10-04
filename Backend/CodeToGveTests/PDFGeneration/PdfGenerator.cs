using System;
using System.Diagnostics;
using System.IO;
using PdfSharp;

using PdfSharp.Pdf.IO;
using PdfSharp.Drawing;
using PdfSharp.Pdf;
using CodeToGiveTests.Models;
using CodeToGveTests.Models;

namespace CodeToGveTests.PDFGeneration
{
	public class PdfGenerator
	{
		public static void GeneratePdf(TestResultModel payload)
		{
			System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);
			string name = payload.Name; //catch if name is null
			
			PdfDocument document = new PdfDocument();

			document.Info.Title = "Created with PDFsharp";

			PdfPage page = document.AddPage();
			XGraphics gfx = XGraphics.FromPdfPage(page);
			XFont font = new XFont("Verdana", 20, XFontStyle.BoldItalic);

			gfx.DrawString($"Hello, {name}!", font, XBrushes.Black,
			new XRect(0, 0, page.Width, page.Height),
			XStringFormats.Center);
			
			string testType = "Chair-lamp test";

			string filename = $"{name}_{testType}.pdf";

			document.Save($"../CodeToGveTests/PdfStorage/{filename}");
			document.Close();
			//Process.Start(filename);

			/*			Process p = new Process();
						p.StartInfo = new ProcessStartInfo()
						{
							CreateNoWindow = true,
							Verb = "print",
							FileName = "C:/Program Files/Adobe/Acrobat DC/Acrobat/Acrobat.exe", //put the path to the pdf reading software e.g. Adobe Acrobat
							Arguments = filename // put the path of the pdf file you want to print
						};

						p.Start(); // $"../CodeToGveTests/PdfStorage/{filename}");*/

		}
	}
}
