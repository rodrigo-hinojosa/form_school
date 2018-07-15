export class Utils {

  public static getValueFromControlformToModel(model: any, controlFormModel: object) {

    for (let property of Object.getOwnPropertyNames(model)) {
      if (controlFormModel.hasOwnProperty(property)) {
        model[property] = controlFormModel[property];
      }
    }
    return model;
  }

  public static getDv(T: number): string {
    let M = 0, S = 1;
    for (; T; T = Math.floor(T / 10))
      S = (S + T % 10 * (9 - M++ % 6)) % 11;
    return String(S ? S - 1 : 'K');
  }

}
