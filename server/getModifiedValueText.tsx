import { WineType } from "./WineType"

export interface WineDto {
    label?: string;
    qty?: number;
    color?: WineType;
}

export const getModifiedValueText = (entry: WineDto) => {
    const { label, qty, color } = entry
    let modifiedColumns: string = ''
    let modifiedValues: string = ''

    if (!!label) {
        modifiedColumns += `label`
        modifiedValues += label
        if (qty===0 || !!qty || !!color) {
            modifiedColumns += ', '
            modifiedValues += ', '
        }
    }
    if (qty===0 || !!qty) {
        modifiedColumns += `qty`
        modifiedValues += qty.toString()
        if (!!color) {
            modifiedColumns += ', '
            modifiedValues += ', '
        }
    }
    if (!!color) {
        modifiedColumns += 'color'
        modifiedValues += color
    }
    return { modifiedColumns, modifiedValues }
}
