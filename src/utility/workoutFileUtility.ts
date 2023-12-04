import { AxiosResponse } from "axios";
import { EXCEL_SHEET_PATH, PUSHUPS_REPS_CELL } from "../common/constants";
import { saveExcelFile, selectExcelFile, updateExcelCell } from "./excelUtility";


export async function generateWorkoutFile(response: AxiosResponse<any, any>){ // make this not any
    const workbook = selectExcelFile(EXCEL_SHEET_PATH);
  
    updateExcelCell(await workbook, response.data("pushups"), PUSHUPS_REPS_CELL)
  
    saveExcelFile(await workbook, EXCEL_SHEET_PATH)
  }
  