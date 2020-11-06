export const formatNumber = (value) =>{
    return new Intl.NumberFormat('vi-VI', { maximumSignificantDigits: 3 }).format(value);
}