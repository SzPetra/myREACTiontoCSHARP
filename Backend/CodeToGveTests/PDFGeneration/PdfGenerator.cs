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

			gfx.DrawString(
				$"Cilent Name : {name}!\n{payload.TestData}", 
				font, 
				XBrushes.Black,
				new XRect(0, 0, page.Width, page.Height),
				XStringFormats.Center);
			
			string testType = "Chair-lamp test";

			string filename = $"{name}_{testType}.pdf";

			document.Save($"../CodeToGveTests/PdfStorage/{filename}");
			document.Close();
/*			try
			{
				document.Save($"../CodeToGveTests/PdfStorage/{filename}");
				document.Close();
			}
			catch (System.IO.IOException ex)
			{
				document.Close();
				Console.WriteLine();
			}*/


			/*			//File.WriteAllBytes(Path.Combine(pdfPath, filename), pdfContents)
						File.WriteAllBytes(
							Path.Combine($"../CodeToGveTests/PdfStorage/{filename}", filename),
							document.GetPDFAsByteArray()
						);
			document.Save($"C/Users/Kis Lóránd/projects_advanced/codeToGive/Backend/CodeToGveTests/PdfStorage/{filename}");
			//document.Save($"../CodeToGveTests/PdfStorage/{filename}");*/
		}
	}
}
