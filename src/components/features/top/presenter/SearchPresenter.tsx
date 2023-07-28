'use client';
import AutoForm, { AutoFormSubmit } from '@/components/ui/auto-form';
import * as z from 'zod';
export const SearchPresenter = () => {
  return (
    <div className="max-w-lg mx-auto my-6">
      <AutoForm
        onSubmit={(data) => console.log(data)}
        formSchema={z.object({
          name: z.string().min(3),
          pass: z.string().min(8),
          terms: z.literal(true),
        })}
        fieldConfig={{
          pass: {
            inputProps: {
              type: 'password',
            },
          },
          terms: {
            fieldType: 'switch',
            description: 'Accept our terms and conditions.',
          },
        }}
      >
        <AutoFormSubmit>Submit</AutoFormSubmit>
      </AutoForm>
    </div>
  );
};
