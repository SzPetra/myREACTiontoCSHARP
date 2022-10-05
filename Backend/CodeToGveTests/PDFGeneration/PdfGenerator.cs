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
			int xBase = 22;
			int x = 100;
			int y = 30;
			XRect rect = new XRect(22, 0, x, y);
			XRect rect2 = new XRect(22, 22, x, y);
			XRect rect3 = new XRect(22, xBase * 2, x, y);


			string[] arr = payload.TestData.Split("\n", StringSplitOptions.RemoveEmptyEntries);
			var lines = new List<string>() { $"Test Type : {arr[arr.Length - 1]}", $"Cilent Name : {name}", "Test Results : " };
			for (int i = 0; i < lines.Count; i++)
			{
				int arrLen = lines[i].Length;
				arrLen = arrLen % 2 == 0 ? arrLen : arrLen - 1;
				var currentRect = new XRect(xBase * arrLen / 4 - 10, xBase * (i), x, y);
				WritePdfLine(
					lines[i],
					gfx,
					font,
					page,
					currentRect);
			}

			for (int i = 0; i < arr.Length - 1; i++)
			{
				int arrLen = arr[i].Length;
				arrLen = arrLen % 2 == 0 ? arrLen : arrLen - 1;
				var currentRect = new XRect(xBase * arrLen / 4 - 10, xBase * (i + lines.Count), x, y);
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

	}
}
