using System;
using System.Diagnostics;
using System.IO;
using PdfSharp;

using PdfSharp.Pdf.IO;
using PdfSharp.Drawing;
using PdfSharp.Pdf;
using CodeToGiveTests.Models;

namespace CodeToGveTests.PDFGeneration
{
	public class PdfGenerator
	{
		public static PdfDocument GeneratePdf(LoadModel payload)
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
			
			string name = payload.Name; //catch name is null
			string testType = "Chiar-lamp test";

			string filename = $"{name}_{testType}.pdf";

			document.Save($"../CodeToGveTests/PdfStorage/{filename}");
			return document;
		}
	}
}
