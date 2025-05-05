"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email!",
  }),
});

import { MapPin, Send } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Typography } from "./Typography";
import { CustomBackground } from "@/components/magicui/custom-background";

const Footer = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="py-24 bg-gradient-5 mt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="h-[500px] overflow-hidden relative">
          <CustomBackground className="border-0 h-screen w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center justify-center">
              <span className="uppercase text-secondary-foreground font-semibold">
                Let’s talk!
              </span>
              <Typography
                variant="title3"
                className="text-white-to-black text-center mt-3.5"
              >
                Ready to collaborate?
              </Typography>
              <Link
                href={"/contact"}
                className="text-lg font-bold py-2.5 px-4.5 md:py-3.5 md:px-7.5 border mt-10 md:mt-20 hover-bg-gradient-2 hover:text-primary"
              >
                Contact Us
              </Link>
            </div>
          </CustomBackground>
        </div>
        <div className="flex justify-between w-full mt-20 flex-col md:flex-row gap-6 md:gap-0">
          <div className="flex flex-col">
            <Link
              href="/"
              className="flex items-center justify-center md:justify-start"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="112"
                height="111"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M15.7402 72.9149V66.7695H17.3249V71.5329H19.7942V72.9149H15.7402Z"
                  fill="white"
                />
                <path
                  d="M21.5352 72.9149V66.7695H23.1198V72.9149H21.5352Z"
                  fill="white"
                />
                <path
                  d="M28.158 66.6686C29.5034 66.6686 30.3327 67.332 30.784 68.0966L29.4574 68.7966C29.2087 68.3913 28.7394 68.0686 28.158 68.0686C27.154 68.0686 26.4447 68.8426 26.4447 69.8466C26.4447 70.8506 27.154 71.6246 28.158 71.6246C28.6374 71.6246 29.0707 71.4586 29.3194 71.256V70.74H27.9094V69.4226H30.876V71.8273C30.2127 72.5553 29.3187 73.0253 28.158 73.0253C26.3247 73.0253 24.832 71.8 24.832 69.8466C24.832 67.8933 26.3247 66.668 28.158 66.668V66.6686Z"
                  fill="white"
                />
                <path
                  d="M36.8652 72.9149V70.4455H34.3132V72.9149H32.7285V66.7695H34.3132V69.0635H36.8652V66.7695H38.4498V72.9149H36.8652Z"
                  fill="white"
                />
                <path
                  d="M41.8477 72.9149V68.1515H40.125V66.7695H45.1463V68.1515H43.433V72.9149H41.8483H41.8477Z"
                  fill="white"
                />
                <path
                  d="M46.3047 69.8466C46.3047 67.9486 47.742 66.668 49.5847 66.668C51.114 66.668 51.9067 67.5066 52.312 68.3173L50.948 68.9626C50.7454 68.474 50.22 68.0686 49.584 68.0686C48.626 68.0686 47.9167 68.8426 47.9167 69.8466C47.9167 70.8506 48.626 71.6246 49.584 71.6246C50.22 71.6246 50.7454 71.2193 50.948 70.7313L52.312 71.376C51.916 72.168 51.114 73.0253 49.5847 73.0253C47.742 73.0253 46.3047 71.7353 46.3047 69.8466Z"
                  fill="white"
                />
                <path
                  d="M58.0888 72.9149L57.7755 71.9842H55.2235L54.9102 72.9149H53.1875L55.5002 66.7695H57.4902L59.8122 72.9149H58.0895H58.0888ZM56.4948 68.1515L55.6382 70.6482H57.3608L56.4948 68.1515Z"
                  fill="white"
                />
                <path
                  d="M61.5411 70.8608C61.9838 71.3028 62.6651 71.6714 63.5038 71.6714C64.0471 71.6714 64.3791 71.4414 64.3791 71.1461C64.3791 70.7961 63.9831 70.6574 63.3291 70.5194C62.3158 70.3168 60.8971 70.0588 60.8971 68.6028C60.8971 67.5708 61.7725 66.6768 63.3478 66.6768C64.3331 66.6768 65.1905 66.9714 65.8445 67.5334L64.9785 68.6668C64.4625 68.2428 63.7898 68.0308 63.2465 68.0308C62.7031 68.0308 62.5185 68.2428 62.5185 68.5101C62.5185 68.8328 62.8965 68.9434 63.5778 69.0721C64.5911 69.2841 65.9918 69.5788 65.9918 70.9701C65.9918 72.2048 65.0791 73.0248 63.4305 73.0248C62.1865 73.0248 61.3205 72.6374 60.7031 72.0481L61.5418 70.8594L61.5411 70.8608Z"
                  fill="white"
                />
                <path
                  d="M68.9844 72.9149V68.1515H67.2617V66.7695H72.2831V68.1515H70.5697V72.9149H68.9851H68.9844Z"
                  fill="white"
                />
                <path
                  d="M73.959 72.9149V66.7695H75.5437V71.5329H78.013V72.9149H73.959Z"
                  fill="white"
                />
                <path
                  d="M79.7539 72.9149V66.7695H84.2592V68.1055H81.3386V69.1282H84.1946V70.4735H81.3386V71.5789H84.2592V72.9149H79.7539Z"
                  fill="white"
                />
                <path
                  d="M29.0337 83.8538L28.413 82.4712H25.0664L24.4457 83.8538H24.0684L26.5357 78.3545H26.9444L29.411 83.8538H29.0337ZM26.7397 78.7238L25.2077 82.1332H28.2717L26.7397 78.7238Z"
                  fill="white"
                />
                <path
                  d="M30.4238 78.3545H30.7698V83.8538H30.4238V78.3545Z"
                  fill="white"
                />
                <path
                  d="M38.6099 83.8538L37.9892 82.4712H34.6425L34.0219 83.8538H33.6445L36.1119 78.3545H36.5205L38.9872 83.8538H38.6099ZM36.3159 78.7238L34.7839 82.1332H37.8479L36.3159 78.7238Z"
                  fill="white"
                />
                <path
                  d="M43.9913 78.3545H44.3293V83.8538H43.968L40.346 78.8805V83.8538H40V78.3545H40.3773L43.9907 83.3118V78.3545H43.9913Z"
                  fill="white"
                />
                <path
                  d="M50.3071 83.8538L49.6865 82.4712H46.3398L45.7191 83.8538H45.3418L47.8091 78.3545H48.2178L50.6845 83.8538H50.3071ZM48.0131 78.7238L46.4811 82.1332H49.5451L48.0131 78.7238Z"
                  fill="white"
                />
                <path
                  d="M51.6992 78.3545H52.0452V83.5158H55.1959V83.8538H51.6992V78.3545Z"
                  fill="white"
                />
                <path
                  d="M59.3667 78.3545L57.1981 81.6618V83.8538H56.8521V81.6618L54.6914 78.3545H55.1001L57.0247 81.3238L58.9494 78.3545H59.3661H59.3667Z"
                  fill="white"
                />
                <path
                  d="M64.1186 78.3545V78.6925H62.0912V83.8538H61.7532V78.6925H59.7266V78.3545H64.1179H64.1186Z"
                  fill="white"
                />
                <path
                  d="M65.0312 78.3545H65.3773V83.8538H65.0312V78.3545Z"
                  fill="white"
                />
                <path
                  d="M67.9609 83.5858C67.5309 83.3451 67.1976 83.0084 66.9589 82.5764C66.7202 82.1444 66.6016 81.6531 66.6016 81.1038C66.6016 80.5544 66.7209 80.0624 66.9589 79.6304C67.1976 79.1984 67.5296 78.8618 67.9569 78.6211C68.3836 78.3804 68.8696 78.2598 69.4142 78.2598C69.7916 78.2598 70.1476 78.3304 70.4829 78.4718C70.8182 78.6131 71.1142 78.8151 71.3709 79.0764L71.1356 79.3044C70.9049 79.0738 70.6442 78.8971 70.3536 78.7744C70.0629 78.6518 69.7522 78.5898 69.4229 78.5898C68.9409 78.5898 68.5116 78.6958 68.1342 78.9078C67.7569 79.1198 67.4649 79.4158 67.2582 79.7958C67.0509 80.1758 66.9482 80.6118 66.9482 81.1038C66.9482 81.5958 67.0516 82.0324 67.2582 82.4118C67.4649 82.7918 67.7569 83.0878 68.1342 83.2998C68.5116 83.5118 68.9409 83.6178 69.4229 83.6178C69.7529 83.6178 70.0682 83.5564 70.3696 83.4331C70.6709 83.3098 70.9396 83.1331 71.1749 82.9031L71.4029 83.1311C71.1462 83.3984 70.8476 83.6011 70.5076 83.7398C70.1669 83.8784 69.8056 83.9478 69.4229 83.9478C68.8782 83.9478 68.3909 83.8271 67.9616 83.5864L67.9609 83.5858Z"
                  fill="white"
                />
                <path
                  d="M73.0755 83.6611C72.6721 83.4751 72.3581 83.2278 72.1328 82.9184L72.3681 82.6831C72.5461 82.9551 72.8215 83.1778 73.1928 83.3511C73.5648 83.5238 73.9521 83.6104 74.3555 83.6104C74.9108 83.6104 75.3495 83.5071 75.6715 83.3004C75.9935 83.0938 76.1548 82.8118 76.1548 82.4558C76.1548 82.2304 76.0981 82.0444 75.9861 81.8978C75.8735 81.7511 75.6848 81.6258 75.4208 81.5204C75.1561 81.4158 74.7781 81.3164 74.2855 81.2218C73.7828 81.1224 73.3861 81.0071 73.0955 80.8758C72.8048 80.7451 72.5941 80.5851 72.4635 80.3964C72.3321 80.2078 72.2668 79.9724 72.2668 79.6891C72.2668 79.4058 72.3515 79.1564 72.5221 78.9391C72.6921 78.7218 72.9335 78.5544 73.2448 78.4364C73.5568 78.3184 73.9168 78.2598 74.3248 78.2598C74.7328 78.2598 75.0895 78.3264 75.4248 78.4604C75.7601 78.5938 76.0428 78.7891 76.2735 79.0458L76.0535 79.2891C75.8541 79.0638 75.6048 78.8898 75.3035 78.7664C75.0021 78.6438 74.6735 78.5818 74.3175 78.5818C73.7988 78.5818 73.3835 78.6824 73.0721 78.8844C72.7601 79.0864 72.6048 79.3544 72.6048 79.6898C72.6048 79.9098 72.6601 80.0918 72.7701 80.2358C72.8801 80.3798 73.0608 80.5031 73.3121 80.6051C73.5635 80.7071 73.9115 80.8031 74.3568 80.8918C74.9068 81.0018 75.3355 81.1224 75.6415 81.2531C75.9481 81.3844 76.1681 81.5438 76.3015 81.7324C76.4355 81.9211 76.5021 82.1591 76.5021 82.4478C76.5021 82.9084 76.3095 83.2724 75.9248 83.5398C75.5401 83.8071 75.0175 83.9404 74.3575 83.9404C73.9075 83.9404 73.4801 83.8478 73.0768 83.6618L73.0755 83.6611Z"
                  fill="white"
                />
                <path
                  d="M45.8887 36.8502L47.8347 42.6849H60.8314L68.7167 35.8889C71.3334 33.5875 73.8748 31.0809 73.9041 26.5935C73.9474 19.8362 70.8194 16.9802 65.2307 16.1642C59.2314 15.2882 54.2807 19.6455 53.0147 26.7842H59.6474C60.2621 24.5789 61.8327 22.5149 64.0487 22.5149C66.0547 22.5149 68.0801 23.7982 67.7687 26.1455C67.5087 28.2502 65.4007 30.2655 64.0094 31.5335L54.2661 40.2109L54.2507 40.2209L53.0861 35.8475L48.2794 21.3329L26.8301 56.8409H34.3281L38.3294 50.3129L49.8147 50.3182L51.5554 56.8409H59.2341L57.3221 50.3182H71.2081L72.0394 44.5595L41.2994 44.5555L45.8881 36.8495L45.8887 36.8502Z"
                  fill="url(#paint0_linear_942_2171)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_942_2171"
                    x1="26.8301"
                    y1="36.4475"
                    x2="73.9047"
                    y2="36.4475"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.02" stopColor="#CACAC9" />
                    <stop offset="0.46" stopColor="#CACAC9" />
                    <stop offset="0.53" stopColor="#D5D5D4" />
                    <stop offset="0.7" stopColor="#ECECEB" />
                    <stop offset="0.86" stopColor="#FAFAFA" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
            <Typography
              variant="body1"
              className="mt-12 text-center md:text-start"
            >
              LightCastle A² is a forward-thinking AI and analytics firm
              <br className="hidden md:block" /> that offers AI-driven
              innovative solutions to empower
              <br className="hidden md:block" /> small- and medium-businesses.
            </Typography>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="p-4 bg-gradient-2 w-fit">
              <MapPin className="text-primary" size={24} />
            </span>
            <p className="font-medium mt-4 text-primary-foreground">
              3921 W St NW, #3,
              <br /> Washington DC, 20007, USA
            </p>
            <div className="mt-7.5 w-full">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8 relative"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-gradient-2">
                          Subscribe
                        </FormLabel>
                        <FormControl className="mt-4">
                          <Input
                            className="border-0 bg-[#252936] p-2 w-full md:w-[437px] h-[61px]"
                            placeholder="Your email"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Send
                    type="submit"
                    className="text-white absolute right-5 top-14"
                    size={24}
                  />
                </form>
              </Form>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between py-3.5">
          <p className="font-medium">Terms & Conditions Privacy Policy</p>
          <p className="font-medium">
            © 2025 LightCastle A². All rights reserved.
          </p>
          <div className="flex gap-2">
            <Link href={"/facebook"} className="bg-[#3C3843] p-2.5">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3887_318)">
                  <path
                    d="M18 9.45605C18 4.48549 13.9706 0.456055 9 0.456055C4.02943 0.456055 0 4.48549 0 9.45605C0 13.9481 3.29115 17.6715 7.59375 18.3467V12.0576H5.30859V9.45605H7.59375V7.47324C7.59375 5.21762 8.93742 3.97168 10.9932 3.97168C11.9776 3.97168 13.0078 4.14746 13.0078 4.14746V6.3623H11.873C10.755 6.3623 10.4062 7.05611 10.4062 7.76855V9.45605H12.9023L12.5033 12.0576H10.4062V18.3467C14.7088 17.6715 18 13.9481 18 9.45605Z"
                    fill="url(#paint0_linear_3887_318)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_3887_318"
                    x1="9"
                    y1="0.456055"
                    x2="9"
                    y2="18.3467"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#CCCCCC" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <clipPath id="clip0_3887_318">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(0 0.456055)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link href={"/x"} className="bg-[#3C3843] p-2.5">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7447 1.88379H16.2748L10.7473 8.20141L17.25 16.7983H12.1584L8.17053 11.5843L3.60746 16.7983H1.07582L6.98808 10.0409L0.75 1.88379H5.97083L9.57555 6.64954L13.7447 1.88379ZM12.8567 15.2839H14.2587L5.20905 3.31864H3.7046L12.8567 15.2839Z"
                  fill="url(#paint0_linear_3887_321)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3887_321"
                    x1="9"
                    y1="1.88379"
                    x2="9"
                    y2="16.7983"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#CCCCCC" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
            <Link href={"/linkedin"} className="bg-[#3C3843] p-2.5">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3887_324)">
                  <path
                    d="M16.6676 0.456055H1.32891C0.594141 0.456055 0 1.03613 0 1.75332V17.1553C0 17.8725 0.594141 18.4561 1.32891 18.4561H16.6676C17.4023 18.4561 18 17.8725 18 17.1588V1.75332C18 1.03613 17.4023 0.456055 16.6676 0.456055ZM5.34023 15.7947H2.66836V7.20254H5.34023V15.7947ZM4.0043 6.03184C3.14648 6.03184 2.45391 5.33926 2.45391 4.48496C2.45391 3.63066 3.14648 2.93809 4.0043 2.93809C4.85859 2.93809 5.55117 3.63066 5.55117 4.48496C5.55117 5.33574 4.85859 6.03184 4.0043 6.03184ZM15.3387 15.7947H12.6703V11.6182C12.6703 10.6232 12.6527 9.34004 11.2816 9.34004C9.89297 9.34004 9.68203 10.4264 9.68203 11.5479V15.7947H7.01719V7.20254H9.57656V8.37676H9.61172C9.9668 7.70176 10.8387 6.98809 12.1359 6.98809C14.8395 6.98809 15.3387 8.76699 15.3387 11.0803V15.7947Z"
                    fill="url(#paint0_linear_3887_324)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_3887_324"
                    x1="9"
                    y1="0.456055"
                    x2="9"
                    y2="18.4561"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#CCCCCC" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                  <clipPath id="clip0_3887_324">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(0 0.456055)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
