export const info = [
  {
    name: '初体验',
  },
  {
    name: '顶点着色器&片元着色器',
  },

]

export const works = info.map((info, idx) => {
  return {
    ...info,
    no: `${idx + 1}`.padStart(3, '0'),
  }
})
