export const rules = {
  required: (message: string = "Поле обязательно для заполнения") => {
    return {
      required: true,
      message,
    };
  },
};
