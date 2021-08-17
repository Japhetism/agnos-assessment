import parse from 'html-react-parser';

export const storeData = (storeType: string, data: any) => {
  localStorage.setItem(storeType, JSON.stringify(data));
};

export const retrieveData = (retrieveType: string) => (localStorage.getItem(retrieveType) ? JSON.parse(localStorage.getItem(retrieveType) || '') : null);

export const clearData = () => {
  localStorage.clear();
};

export const htmlParser = (string: string) => parse(string);

export const formatAPIResponse = (data: any) => {
  return {
    responseCode: 0,
    data: data
  }
}

export const formatCurrency = (value: number) => {
  return value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}