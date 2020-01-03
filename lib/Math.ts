export const exp = (value: number, exponent: string): number =>{
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  };