import { body } from "express-validator";

export const registerValidation = [
  body("email", 'Неверная почта').isEmail(),
  body("password", 'Пароль должен состоять минимум из 5 символов').isLength({ min: 5 }),
  body("fullName", 'Имя должно состоять минимум из 2 символов').isLength({ min: 2 }),
  body("avatarUrl", 'Неверный источник').optional().isURL(),
];
