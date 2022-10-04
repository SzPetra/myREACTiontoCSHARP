using System;
using System.Diagnostics;
using System.IO;
using PdfSharp;

using PdfSharp.Pdf.IO;
using PdfSharp.Drawing;
using PdfSharp.Pdf;

namespace CodeToGveTests.PDFGeneration
{
	public class PdfGenerator
	{
		public static PdfDocument GeneratePdf()
		{
			System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);
			
			PdfDocument document = new PdfDocument();


			document.Info.Title = "Created with PDFsharp";

			PdfPage page = document.AddPage();
			XGraphics gfx = XGraphics.FromPdfPage(page);
			XFont font = new XFont("Verdana", 20, XFontStyle.BoldItalic);

			gfx.DrawString("Hello, Jahhhn!", font, XBrushes.Black,
			new XRect(0, 0, page.Width, page.Height),
			XStringFormats.Center);

			const string filename = "HelloWorld2.pdf";
			//document.Save($"C:/Users/Kis Lóránd/projects_advanced/codeToGive/Backend/CodeToGveTests/PdfStorage/{filename}");

			document.Save($"../CodeToGveTests/PdfStorage/{filename}");

			//Process.Start($"../PdfStorage/{filename}");
			//Process.Start($"C:/Users/Kis Lóránd/projects_advanced/codeToGive/Backend/CodeToGveTests/PdfStorage/{filename}");
			return document;
		}
	}
}
