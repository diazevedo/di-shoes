const { format: formatPrice } = new Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD',
});

export { formatPrice as default };
