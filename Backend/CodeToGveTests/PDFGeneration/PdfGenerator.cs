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
		private const int borderWidth = 2;

		public static void GeneratePdf(TestResultModel payload)
		{
			System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);
			string name = payload.Name; //catch if name is null
			
			PdfDocument document = new PdfDocument();

			document.Info.Title = "Created with PDFsharp";

			PdfPage page = document.AddPage();
			XGraphics gfx = XGraphics.FromPdfPage(page);
			XFont font = new XFont("Verdana", 20, XFontStyle.BoldItalic);
			int xBase = 22;
			int x = 100;
			int y = 30;
			XRect rect = new XRect(22, 0, x,y);
			XRect rect2 = new XRect(22, 22, x, y);
			XRect rect3 = new XRect(22, xBase*2, x, y);

			var lines = new List<string>() { $"Test Type : ", $"Cilent Name : {name}" };
			for (int i = 0; i < lines.Count; i++)
			{
				int arrLen = lines[i].Length;
				arrLen = arrLen % 2 == 0 ? arrLen : arrLen - 1;
				var currentRect = new XRect(xBase*arrLen/4, xBase*(i), x, y);
				WritePdfLine(
					lines[i],
					gfx,
					font,
					page,
					currentRect);
			}
			string[] arr = payload.TestData.Split("\n", StringSplitOptions.RemoveEmptyEntries);
			for (int i = 0; i < arr.Length; i++)
			{
				int arrLen = arr[i].Length;
				arrLen = arrLen%2==0 ? arrLen : arrLen-1;
				var currentRect = new XRect(xBase*arrLen/4, xBase*(i+2), x, y);
				WritePdfLine(
					arr[i],
					gfx,
					font,
					page,
					currentRect);
			}


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

		private static void WritePdfLine(string text, XGraphics gfx, XFont font, PdfPage page, XRect rect)
		{
			gfx.DrawString(
				text,
				font,
				XBrushes.Black,
				rect,
				XStringFormats.Center);
		}

		/*void DrawText(XGraphics gfx, int number)
		{
			BeginBox(gfx, number, "Text Styles");

			const string facename = "Times New Roman";

			//XPdfFontOptions options = new XPdfFontOptions(PdfFontEncoding.Unicode, PdfFontEmbedding.Always);
			XPdfFontOptions options = new XPdfFontOptions(PdfFontEncoding.WinAnsi, PdfFontEmbedding.Default);

			XFont fontRegular = new XFont(facename, 20, XFontStyle.Regular, options);
			XFont fontBold = new XFont(facename, 20, XFontStyle.Bold, options);
			XFont fontItalic = new XFont(facename, 20, XFontStyle.Italic, options);
			XFont fontBoldItalic = new XFont(facename, 20, XFontStyle.BoldItalic, options);

			// The default alignment is baseline left (that differs from GDI+)
			gfx.DrawString("Times (regular)", fontRegular, XBrushes.DarkSlateGray, 0, 30);
			gfx.DrawString("Times (bold)", fontBold, XBrushes.DarkSlateGray, 0, 65);
			gfx.DrawString("Times (italic)", fontItalic, XBrushes.DarkSlateGray, 0, 100);
			gfx.DrawString("Times (bold italic)", fontBoldItalic, XBrushes.DarkSlateGray, 0, 135);

			EndBox(gfx);
		}

		public void BeginBox(XGraphics gfx, int number, string title)
		{
			const int dEllipse = 15;
			XRect rect = new XRect(0, 20, 300, 200);
			if (number % 2 == 0)
				rect.X = 300 - 5;
			rect.Y = 40 + ((number - 1) / 2) * (200 - 5);
			rect.Inflate(-10, -10);
			XRect rect2 = rect;
			rect2.Offset(borderWidth, borderWidth);
			gfx.DrawRoundedRectangle(new XSolidBrush(this.shadowColor), rect2, new XSize(dEllipse + 8, dEllipse + 8));
			XLinearGradientBrush brush = new XLinearGradientBrush(rect, this.backColor, this.backColor2, XLinearGradientMode.Vertical);
			gfx.DrawRoundedRectangle(this.borderPen, brush, rect, new XSize(dEllipse, dEllipse));
			rect.Inflate(-5, -5);

			XFont font = new XFont("Verdana", 12, XFontStyle.Regular);
			gfx.DrawString(title, font, XBrushes.Navy, rect, XStringFormats.TopCenter);

			rect.Inflate(-10, -5);
			rect.Y += 20;
			rect.Height -= 20;

			this.state = gfx.Save();
			gfx.TranslateTransform(rect.X, rect.Y);
		}

		public void EndBox(XGraphics gfx)
		{
			gfx.Restore(this.state);
		}*/
	}
}
