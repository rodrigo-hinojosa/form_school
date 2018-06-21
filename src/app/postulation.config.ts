export const POSTULATION_CONFIG = {
  uri: 'URL',
  messageSnackBar: {
    success: {
      message: 'LA SOLICITUD FUE PROCESADA CON ÉXITO',
      action: 'OK',
      type: 'snackbar-success',
      duration: 5000
    },
    error: {
      message: 'NO SE PUDO PROCESAR LA SOLICITUD',
      action: 'ERROR',
      type: 'snackbar-error',
      duration: 5000
    }
  },
  messageFormValidation: {
    required: 'Campo requerido',
    email: 'Debe ingresar un email valido',
    max: 'Excede el valor maximo del campo',
    maxlength: 'Excede el largo maximo del campo',
    validValue: 'Caracter introducido no permitido',
    validValueNumber: 'Solo se permiten numeros',
    validValueDate: 'Formato de fecha inválido',
  },
  messageAPIValidation: {
    status422: {
      url: 'La URL ":value" ya está en uso... (ingrese uno diferente)',
      prefix: 'El prefijo ":value" ya está en uso... (ingrese uno diferente)',
      name: 'El nombre ":value" ya está en uso... (ingrese uno diferente)'
    },
    status400: {
      message: 'El estado ":value" no se puede eliminar (existen Comunidades asociadas)'
    },
    generic: 'No se pudo procesar la solicitud'
  },
  dialogSize: {
    height: '500px',
    with: '600px'
  }
};
