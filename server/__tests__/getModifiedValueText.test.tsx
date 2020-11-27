import { getModifiedValueText, WineDto } from '../getModifiedValueText'
import { WineType } from '../WineType'

describe('getModifiedValueText', () =>{
    describe('when given a full entry', ()  => {
        const testEntryFull: WineDto = {
            label: 'test label',
            qty: 6,
            color: WineType.red,
        }
        
        it('should return the appropriate SQL filler text', () => {
            const result: { modifiedColumns: string, modifiedValues: string } = getModifiedValueText(testEntryFull)

            expect(result.modifiedColumns).toBe('label, qty, color')
            expect(result.modifiedValues).toBe(`${testEntryFull.label}, ${testEntryFull.qty}, ${testEntryFull.color}`)
        })
    })

    describe('when given a qty of zero', ()  => {    
        const testEntryZeroQty: WineDto = {
            label: 'no wine here',
            qty: 0,
            color: WineType.blush,
        }
        it('should return zero for qty', () => {
            const result = getModifiedValueText(testEntryZeroQty)

            expect(result.modifiedColumns).toBe('label, qty, color')
            expect(result.modifiedValues).toBe(`${testEntryZeroQty.label}, ${testEntryZeroQty.qty}, ${testEntryZeroQty.color}`)
        })
    })

    describe('when given only a qty', ()  => {    
        const testEntryQtyOnly: WineDto = {
            qty: 1,
        }
        it('should return the appropriate text', () => {
            const result = getModifiedValueText(testEntryQtyOnly)

            expect(result.modifiedColumns).toBe('qty')
            expect(result.modifiedValues).toBe(`${testEntryQtyOnly.qty}`)
        })
    })

    describe('when given no label', ()  => {
        const testEntryNoLabel: WineDto = {
            qty: 67,
            color: WineType.fortified,
        }
        it('should return the appropriate text', () => {
            const result = getModifiedValueText(testEntryNoLabel)

            expect(result.modifiedColumns).toBe('qty, color')
            expect(result.modifiedValues).toBe(`${testEntryNoLabel.qty}, ${testEntryNoLabel.color}`)
        })
    })
})
