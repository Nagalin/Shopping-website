import formatCurrency from "./formatCurrency";

it('Should format the number to USD currency',()=>{
    expect(formatCurrency(2.56)).toBe("US$2.56")
})