export const formatRupiah = (number: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(number);
};

export const formatDate = (timestamp: any) => {
  const date = new Date(timestamp);
  const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };
  const formattedDate = new Intl.DateTimeFormat('id-ID', options as any).format(date);
  return formattedDate;
};