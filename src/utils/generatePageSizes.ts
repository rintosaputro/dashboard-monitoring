const generatePageSizes = (total: number) => {
  const sizes = [];

  for (let i = 10; i <= total; i += 10) {
    sizes.push(i);
  }

  if (sizes.length === 0) return [total];

  if (sizes[sizes.length - 1] !== total) {
    sizes.push(total);
  }

  return sizes;
};

export default generatePageSizes;
