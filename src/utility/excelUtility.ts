import ExcelJS from 'exceljs';

export async function selectExcelFile(filePath:string) {
    // Open the existing Excel file
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath)
    .then((workbook) => {return workbook})
    .catch((error: any) => {console.log(error)})

    return workbook
}

export async function saveExcelFile(workbook: ExcelJS.Workbook, filePath:string) {
    // Save the changes to the file
    await workbook.xlsx.writeFile(filePath);
}

export function updateExcelCell(workbook: ExcelJS.Workbook, data: string, cell: string, sheet: number = 1) {

    const currentSheet = workbook.getWorksheet(sheet);
    // Update the data in the sheet
    if (currentSheet)
    {
        currentSheet.getCell(cell).value = data;
    }
}
