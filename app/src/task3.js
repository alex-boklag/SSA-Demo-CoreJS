export function sortTriangles(trianglesList) {
  if (Array.isArray(trianglesList) === false) return 'The argument is not an array!';
  const trianglesAreCorrect = trianglesList.every(t => {
    const [v1, v2, v3] = t.vertices.toLowerCase().split('');
    if (t[v1] >= t[v2] + t[v3] || t[v2] >= t[v1] + t[v3] || t[v3] >= t[v1] + t[v2]) {
      return false;
    }
    return true;
  });
  if (trianglesAreCorrect === false) return 'Some triangle in the list is incorrect!'

  trianglesList.forEach(triangle => {
    triangle.S = calculateTrinagleArea(triangle);
  });

  return trianglesList
    .sort((a, b) => b.S - a.S)
    .map(triangle => triangle.vertices);
}

export function calculateTrinagleArea(triangle) {
  const [v1, v2, v3] = triangle.vertices.toLowerCase().split('');
  const p = (triangle[v1] + triangle[v2] + triangle[v3]) / 2;

  return Math.sqrt(p * (p - triangle[v1]) * (p - triangle[v2]) * (p - triangle[v3]));
}