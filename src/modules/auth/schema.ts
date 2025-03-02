import { z } from "zod";

const baseSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const signUpSchema = baseSchema.extend({
  name: z.string().min(1, "Name is required"),
});

export const signInSchema = baseSchema;

export type SignUpData = z.infer<typeof signUpSchema>;
export type SignInData = z.infer<typeof signInSchema>;

export type userAuthData = SignUpData | SignInData;

export const PasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type PasswordFormValues = z.infer<typeof PasswordSchema>;

export const TwoFactorFormSchema = z.object({
  code: z.string().min(6, "Code must be 6 digits").max(6),
});

export type TwoFactorFormValues = z.infer<typeof TwoFactorFormSchema>;
