export const flash = {
  initialState: { message: String(), open: false, type: String() },
  reducers: {
    setFlash: (state, payload) => ({ ...state, ...payload }),
    resetFlash: state => {
      console.log('resetting flash');
      return { ...state, message: String(), open: false, type: String() };
    }
  }
};
