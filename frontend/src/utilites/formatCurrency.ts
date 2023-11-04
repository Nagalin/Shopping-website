export default function formatCurrency(price : number) {
    const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined,{
        currency : 'THB',
        style : 'currency'
    })
    return CURRENCY_FORMATTER.format(price)
}