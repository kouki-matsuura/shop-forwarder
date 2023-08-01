'use client';
import AutoForm, {
  AutoFormInputComponentProps,
  AutoFormSubmit,
} from '@/components/ui/auto-form';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import * as z from 'zod';
const formSchema = z.object({
  center: z
    .string({ required_error: '中心地点を入力してください' })
    .min(1, { message: '中心地点を入力してください' })
    .describe('地点')
    .default(''),
  radius: z.string({ required_error: '半径を入力してください' }).default('1'),
});

export const SearchPresenter = () => {
  return (
    <div className="max-w-lg mx-auto my-6">
      <AutoForm
        onSubmit={(data) => console.log('aaa:', data)}
        formSchema={formSchema}
        fieldConfig={{
          center: {
            inputProps: {
              required: true,
              type: 'text',
              placeholder: '例）新宿駅',
            },
          },
          radius: {
            fieldType: ({
              label,
              field,
              fieldConfigItem,
              fieldProps,
            }: AutoFormInputComponentProps) => (
              <FormItem className="flex flex-col space-y-2 w-80">
                <FormLabel className="font-medium text-sm">半径（m）</FormLabel>
                <FormControl>
                  <input
                    type="range"
                    className="w-full"
                    min="1"
                    max="6"
                    step="1"
                    value={field.value}
                    onChange={(e) => {
                      console.log(e.target.value);
                      field.onChange(e.target.value);
                    }}
                  />
                </FormControl>
                <ul className="flex justify-between w-full px-[5px]">
                  <li className="flex justify-center relative">
                    <span className="absolute">300</span>
                  </li>
                  <li className="flex justify-center relative">
                    <span className="absolute">500</span>
                  </li>
                  <li className="flex justify-center relative">
                    <span className="absolute">1000</span>
                  </li>
                  <li className="flex justify-center relative">
                    <span className="absolute">2000</span>
                  </li>
                  <li className="flex justify-center relative">
                    <span className="absolute">3000</span>
                  </li>
                  <li className="flex justify-center relative">
                    <span className="absolute">5000</span>
                  </li>
                </ul>
              </FormItem>
            ),
          },
        }}
      >
        <AutoFormSubmit>Submit</AutoFormSubmit>
      </AutoForm>
    </div>
  );
};
