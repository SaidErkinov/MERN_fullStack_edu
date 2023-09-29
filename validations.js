import { body } from "express-validator";

export const loginValidation = [
  body("email", 'Неверная почта').isEmail(),
  body("password", 'Пароль должен состоять минимум из 5 символов').isLength({ min: 5 }),
];

export const registerValidation = [
  body("email", 'Неверная почта').isEmail(),
  body("password", 'Пароль должен состоять минимум из 5 символов').isLength({ min: 5 }),
  body("fullName", 'Имя должно состоять минимум из 2 символов').isLength({ min: 2 }),
  body("avatarUrl", 'Неверный источник').optional().isURL(),
];

export const postCreateValidation = [
  body("title", 'Введите заголовок статьи').isLength({min: 3}).isString(),
  body("text", 'Введите текст статьи').isLength({ min: 3 }).isString(),
  body("tags", 'Неверный формат тегов (укажите массив)').optional().isString(),
  body("imageUrl", 'Неверный источник').optional().isString(),
];