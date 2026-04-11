import React from 'react'

function BoatCards() {
  return (
    <div className='flex gap-4 flex justify-around mt-280 '>
      {/* CARD 1 */}
      <div className='h-[360px] bg-white w-60 rounded-2xl shadow-2xl mt-8'>
        <div className='w-60'>
          <img
            className='rounded-t-lg h-40 w-60'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPMnEjy6Sn8b7HRuWiRTod3VR7yCcTLkPHbQ&s"
            alt=""
          />

          <div className='bg-amber-300 px-3 py-2 flex justify-between text-sm font-semibold'>
            <p>100 Hours Playback</p>
            <p>⭐ 4.8</p>
          </div>

          <div className='ml-3.5'>
            <h3 className='font-semibold mt-5 mb-2'>boAt Airdopes 181 Pro</h3>
            <p>..................................................</p>

            <p className='mt-2 font-semibold'>₹899</p>

            <div className='flex gap-3'>
              <p className='text-sm line-through text-gray-500'>₹2,499</p>
              <p className='text-sm text-green-500 font-semibold'>64% off</p>
            </div>
          </div>
        </div>
      </div>
{/* Card 2 */ }
   <div className='h-[360px] bg-white w-60 rounded-2xl shadow-2xl mt-8'>
        <div className='w-60'>
          <img
            className='rounded-t-lg h-40 w-60'
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhITFhUXFxUVGBcXGBUaGBUVFRcYGBUXFRYYHSghGBolHhcZIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLy0tLS0tLi0tNS01Ly0tLSstLS0tLS0tLS0tLS0tNS0rKy0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwMEBQYIAgH/xABIEAACAQIDBAcEBgUKBgMAAAABAgADEQQSIQUGMUEHEyJRYXGBMpGhsUJSgpLB0RQjYnLwCBUzU3ODk6KjskOzwtLh8SRUw//EABsBAQADAQEBAQAAAAAAAAAAAAABAgMEBQYH/8QAJhEBAAICAgIBAwUBAAAAAAAAAAECAxEEMRIhUSJBYQUTMnGxBv/aAAwDAQACEQMRAD8AnGIiAiIgIiICIiAiIgIiICIiAiJbVdoUV0arTHm6j5mBcxKFHGU39iojfusp+RleAiIgIiICIiAiIgIiICIiAiIgIiICIiAiJZbU2rQw6Z69VKa97G1/IcT6QL2JHW1OmTZtK4QvUPgAAfU6/Cabtvp0ZgVw9HJ+1e7elxYe6ToTdjsfSormq1EQd7MBfyvxmt4zpEwSaIalU/sJ+LlfhOdNob71qjFyoLHizkux9WJmKxG8WJfQ1SB3LoJePCPmVfboPH9KDD+jw6r41an/AEi3zmrbT6Uq544qlTHdSQH4sCfcZClTEM3tMx8zKd4/ciOqx/pr8pGx2+YraVMVWf8AfLEegzWmLxeJLDMjKUuLlfo34ZxxHy8TNNvLrZ+KZHDLryIPBlPtKfAjSaU5ExPvpE0SBsyxW91Y94/jTnNo2JvVisMRkqF0503JZSPC+q+nxkePSNNgUJKOA6+KMLrfxsZc0sURqpt/HOdloie2UOkd2t5KOMS6dlx7dM+0viPrL4/I6TMznHYe2nSotSm2SquotwPeLcweYk6bq7wpjKWcdmothUT6pPAjvU2Nj59xnFlxePuOmtbbZqIiYLkREBERAREQEREBERAREQERMRvXt1MFhamJfgimw+s3IQMB0kdIFLZtPKLPiGHYTu/ab+PwB5q3g3jxONqmpXqMxJ0FzYdwAlb+dFxe0ErY9z1dSshrHU5aRcZwLagBb8Jvu/8Avbs418PSw9np0BiLVcPTVDTFWmVopSuQCUPazC1rKRqDAi6ngKpyWpt+sLBCRZWy+3ZjpZeZvpztK209jV8OFNankzM6AErmDU7Zgyg3X2gRe1wQRcTZdrb8LVqU6go1BkIqFetAVqhIdg65DnXOqkE2NhbkuXXtubcqYkrnVFCgaICAWyJTLm5OpWkgsLDsCwGtwxcREBERASthVuwHjKMutnjtX7gT7heBvGBAqLQp9yL7iLj4ES32thDSqFfWZXdnD3xGUcFIUeSdkfASp0hAdctu7WerrVdOf7tbDniJt25u8r0Kq1V9pdHXlUpniPP5G000NPdOqVYMvEfxaV79Sl1dgcWlamtWmbo4DA+B7+48rSvIg6O99adBerrFupc3Dceqc+1mHHKfDgdbakiXabhgGUgggEEG4IOoII4icGSk0nTas7eoiJmkiIgIiICIiAiIgIiICQh/KN2yQKGEB0N6jDvtoL/CTfOWumzaXXbUqgHSmBTHmBrA0GJlcBsGtVwuJxa5eqw3VdZckEms+RQgtqb6nUWEvNq7o16IwoANSriaP6QKNNWZ0pk9gkDUkgE8NLQNeiZrZm6eOxALUcJWdRnucpAvT9tQTYFh9Ua8dNJbbb2LXwjqldQpemtVcro4am98rBkJBBsefKBjoiICIiAmV2DTvUGl+0oPlmGb4XmKEzm76cW7gxPqjKP8zLLUjdohE9JB3DpZqhY+cwu/lRnxJAawE2ncOlZGbwmhbz13bEvlKgX4njeenefTCO1nRQrxYnzlYNMeQ3OofQASoK1pnErM1sfFZWyH2W08m5e/h7pvu6PSJ+go9Csr1EBHVgHVC3K5+gb38Df0ik1/OZLD02r1VLaaWbyGv5284mItGpOnTG6O8aY6h1yoUOYqyEgkEag35gggzNyJui3aPV4k0TotVbAft07lf8ub4SWZxZaeNtNKzuCIiZrEREBERAREQERECniawRGc8FUsfIC5nGO8WMNbE1qp+lUY/G06u6Rto9Rs3E1L2PVlR5tp+c5BYyRLm5OBp/zO9GsQKeIFXG1uRGHwmKwiEAjUkhK9vEibezVXrvWPYKVtn4evUW4Whh8PR/TsVdx/R0y7ZNTbQDwkL4jC7S7NFlqherXDi1hT6oE4gUzUXsEAhnNzplN+BtUobtbQrsxdiOsyM7Vao7ZLOBnFyzOCj3UgsCtrXIBgb5tfbCCm9UugP834quozKHGI2xiSQAL8VpHW3AC80LpHxtOpjmWg6vRo06OHpMpupSjSVLqRxGYMfWXK7iVCLmqoIQOVALsy9X1rmmF0Y5bhVJBY034AXP2huzTXrU/V1SuJbCtUqP1S0VQAdZYPcOzNZb5l/Vtob6Bp0TcN5UwVLDGjhmR261TnJRqlgay1FLqo7N0pEEaENeafAREQPomxbHW1Njzsq/fYH/8AIzXVE2nAr+rUd72P2EVh/wA0zbBG8kK36SFsDH0aOHyvUVXcWUE8dCfTgeM0HaeEYVGLqyljcXBFx3i/EeMutyMQhx1PPq9TE0aevAU2zK49bqskvpS2YDRL21Q5gfgfh8hO6Z2x1pEP6OsdUO6VDPJlVnm0rYOtkqBvGW7VVHEj3iUmxSd/uvI2JC2ZizTq0qqXJV0cAcWsQco778PWdBAzmXdvbeJR1egqLkFusqIGse+mp0BtzsfSdCbp7SbEYSlVY3YqQxsBd0JVjYcLkX9ZhyY3qVqMvEROVoREQEREBERAREQIr/lC7SyYBKIOtWp8F/8Ac5yUi4uLi+o4XHnykufyi9pZsXRoA6U6eY+bH8pEMDZsdvnWqdavVUQlW4KkM1galSqoBLfReqxHxuNJZ4verF1Dc1iupayBUAYutQkBQNS6hvMnvN8LEDIYfbeIRw/WszKAB1lqgFgQLLUBGmY200ue+WNSoWJZiSSSSSbkk6kkniZ5iAiIgIn3KeNtJ8gVKIuRN02bRu1JfA/F2AP3Qvumo7PXtj3zfd3KBNdVOpUU1PmqKG+IM6uLH1TLPJ0xO0NiVcJjAwDAKRXRgL+wc408LfCb/vxvrh8XgwtAsKtQAMpVv1evbuSADwsLd95Q6SXstJPX3TRJ0zEKbWZwpPGo/pp8p8/Ql53PmTLy08kSNG1uMKg+iJ7CDkJUtFoGY3dqdll7jeTX0U4nNhqlM/Qqkj911BHxDSC9h1Qrm5sOF+V+Qk39GOysRR6x6iZadVabIcym9sxBsCbXDc5nm14LV7b3EROFqREQEREBERAREtNrYsUqFWqfoI7fdUmByp0qbS6/aeJe9wHKDyTQTVKaEmwFzK2MqmpVZuJdyfeZs2xd36j0qlRVy0qasz1W9klRfKO9jcC3K+viGr1MK6i5XT0/CUgJtu08CKdrMSCWRgQNGUIxsVJDIVqIwbua1tNaXR3s0VcYGIutIGp4FgQE+Jv9mTEbnTHkZ64MVsluojbdtxejqmqCvi6Zq1LZuqsSlIcusA9pvA6Dxm8VkoMnVmjSKWtlyJlt5WtL3YWMcYfEJTALkA25lD2XIHMgfOYitgaqotRkYI1spPO9yPlN4pHT4vl8rNlrXLEzO4mZ11HvSGukHYKYXE/qtKVQZ1HHKb2Zb8wOI8CJd7l7spUH6RXF1v2EPBrcWbwvpbnbu41ulXEg1qNMcVQsftnQf5fjN93ZxmHw9M5qPWOqItG9sikC2ZgeY0I4+nGcueYrOn6F/wAvitysEZstfKYiPXzMzMRM7/Ebl4ACqAFsvAaWXyHKRhv1s1KVcGmAq1FzZRwDA2NhyHA+pkv7P3qrU0qrUvX61QB1rsyoRfUIbgg34C3ASG988eKuIsputMZL97XJY+829Jji1v0+j/WI1x5/crETuPH3vfz/AFrpY7HoZ3y3tmsl+7Oco/3SR9yE6yuXtxZm95JmhbuCzZu7M3qiM4+KD3yTejjD8+4T1eLH0zL4/Ivdv7DqY7EvTpsq9TQaqb31tYBRbmb/AAkXvijoQvHx/wDEn7o7o58Vj6p4fqaQ9OsZ/wDcnukE4zDZCV+qxX3G34TTy3aY+NI16WNXFVLXCr5a/nKVHF176op8xw9zD4y8KgC54CW36fT5EnyBlbd+5TD61Sqx7RUDXRQBx8RqfUmfRS74pYkMQAra99peBJaIQrbLp9l/A02+61zOmdzaubA4Y91JF+4Mv4TmvBjs1f7J/eBpOhujapfZ9LwNUf6jkfAzLkR9MJp22eIicbUiIgIiICIiAmldMO0uo2VXN9Xy0x9o6/AGbrIi/lH1yMHh0HBqxv8AZXT5yYEAYM9tb9//AKm77P3jZMM2EZFakzK3DXSoGqA6jMGAtxFrTQpcjHva1/W2sgZnbu1M2uo4hQTc6m7MxAAuT3ADRQAAABkei7GKuIemTY1E7PiUN7e659JprsSbk3MU3KkMpIIIIINiCNQQRwMms6nbm5fHjkYbYpnW4dC0KzIwZCVYagjiJ53r3vKUM2JcFVN1UABqj2sAAOfwF5EVPf3GhcudCfrFFzfl8JgNobQq13z1nZ27zyHcBwA8BNrZI+0PneL+hcmszTJfVJ7iJn29bUx716r1n9pzfwA4ADwAsPSbJsfe9UpqlZXJUABlsbgcLgkazUInNekX7fZ8LlZOHO8Pr1rX202rbG97OpSirIDoWNs1u4AcPO81YCLS6wOFZ2CrbmSTwUDizHkoimOK+qp5XLy8m3llnf8AjKbOGWmT9a1MeOodz6AKP72S50f0LUWY90iakwZ1Vb5F7K34kXuWPixJPhcDkJKeBxooYOw1ZtFA4knQADvnq4qeNNPPtO5b70YULYetU/rMRVa/goVPmhkGbw07V6/hXqj/AFGnSG6+zTh8LRotbMqDPbgajdqoR4Zmac67x616x769U+92mGO3le0rWjUQxAp30PCeKez6Y4IPn85cimSCAbGxse4zGJsaqfarX+8fnNZ76RC/FIDgB8J7yS2w+yArBsxJBvMjlloQYNfb/s3+Qk79FTXwA8Hb5KfxkGUdBUPdTqH4Sdui1LYEeNR/hYfhMeR/BanbboiJxNSIiAiIgIiICRr09bGavs8VEBLUKgqWH1SCH9w19JJUoY3DCojI3Bhby7jbzk179olxM6zzaS1vh0fpTqP1Vk1uabXyrfnTZQSEOpAse64tYafU3fRTq1P1NT8KZmk4b/CPKGq2i02unsemPaZPsCo3+5UlVNm0u9v8ID49cYjBk+DzhqIQ9xn0Uj3GbicFS5LV99NfgUaVEw6D/hMf3n/7FWWjjZEecNNGGb6pnv8AQ37puAw68epX7+I+XW2+EVaTcQtIEcLU6ZI8mZSfjLRxbfKP3Iath9mMwzkhaf8AWNovkvNz4KCZeqLjqqKnLpmY+1UI4Freyo5KCbcSSdRVxVBi2aoxY97Ek27rnlLpdoJTAVFux4eN9Bbvm+PBFPas2mVPDYbq2BaSv0XbEfF1lxlUf/HoH9UDwq1l+kO9UPP61vqmYjcfovxGLYV8eHo0OIpnSrVHdbjSXxPa7gNDJ1wuGSmi06aqiKAqqosFUaAADgJTNmiI8aprT7yqMbC85dxr57t3sW95J/GdI7y4rqsJiKnNaNVh5hDYe+05vtyleNHqZTdZ1KhVSwBJAvYc5j02pWbhRI9GMzPVz6FnRMTtRj8JVrlhnUBdb6W8rTIT7aJKH2mvZqeKZfvG0nzo5S2z6Xiap/1XA+AkD0Vup8XpD0DAn4ToXc2llwOHHfTVvvdr8Zz8ifpXp2zMRE42pERAREQEREBERAxu29i0sStnuGHsuvtL+Y8DIS342Q2ErGmydZoGVl7OcHuU8De448pP80rpT2L12F65Rd6OvnTPtD00PoZ08fLMW8Z6UvX1tC1DC4pyBTwhueGepSThr9JhKh2Tjb2YYGl41MZhPktUn4TBpslUJzDMbnU8bX04+EqCio+jOrdmfplzsqrz2jspfKuX/wCWjSn+gUwbVNr0B/Z4fF1PceqA+Mx2UfVjTuEj6vk9fDIHAYP6W1cQ3gmDYe41Ko+U8mhswcau1X8lwqD4ux+Esr+A90+MxjU/Mp2sdt06Ocfo4rinYf07Iz5tbm6Kotw089ZKXQ/iw1CkDYmliMgvyFQi1vvmRdj1JW/d8psfRlt5MPWytnNNnp1GZVvl6prjKCRe+g5W8eET/GYQ6aiU8PWV1V0N1YBlI5qwuD7pUnmt0S9J3SCl6mzadJiWFmqk2ChXBICWu18pF7jQ31kahp43+pV8PtKscTckswV25oD+rtb9jLMaNpnkD7p349VjUMbblmqeDr1bigoZha+a9gD5c5cpuvtFuCD0Un5zWm23iEF6VSol/aysyXHK5Ui//mWlXbeIb2qtU+bufmZabeyIbGikCzG5FwT4gwxmu0cc505gd8qZ6hkxZGkrdG+z8PVfEZkDlEog5rEZqocuVHL2LA8eMmLZtMLSpqvBUVR5KLD5Tnbos27+j43qqh7OJCU791RSeq9+Yr9oTojZjdgeBI/H8Zy59tKrqIic65ERAREQEREBERAT4ygggi4OhB5jxn2IHPvSLhlp7Qr00phFXq8oA0INNWJ95PumqOJNfS1u51tIYumO3SFqludK97/ZJJ8ie6Q6pyMrWBysGseBykGx8NJ6GO3lVjaNSVdl11XO1GoFtckqdB3nuHiZbUaRZgqgljoANST4CbFSxaOGamyq96xBc0UcVKjl6dc1mOY5Q2UhSScgGWzTxS2nh0avlByGojoqhVFVRcPTYMjWpm9wpAsB32EncoYTF4V6Ry1FKNa9m0NvKUlpM2iqx8gTyvy8BeZY7dcIVTMl+qJysbE0gyDMPpKaZRSDx6sGVMTvFUZHUBxnuWY1XZgxdHGRuKoChspJ9ttZPsa64uPOXOwgFYL+yR66H8J9x9c1HLkAFrXtzYABm82ILHxJlsjlSGHEG8kdDdGO0+twgpk9qiSn2D2kPla6/Ym3yEuj/bgw+JRibUqoCP3DN7DHyPuBaTbOLPTxt/bWs7hFvTlsek9PD1zbOHNO3NgVLA/ZIP35ELYcX4SSOlva/W4oUlPZoLl86j2L+4BR5gzQAs6cUapG2dp9rRsGp4iUhsqn9U+8yviMAXbNnYDhYcJ5/mpebH4TTX4QUsEi+yvzPzlVaErUKAUZRwlUJcgDnpJ0hZ4zYlV6T4ilocOgrE/3qIoHj2s32DOlN0ceK+Gp1h/xEp1PLOim05k3pxJziirMFCjMASA2t1DDnawOvfOg+iUk7MwxP9Wo+6WHytOXPHbSjcoiJytCIiAiIgIiICIiAiIgfGUEEEAg6EHgQeRkE9IG6pwda6A9TUJNM/V5mmT3jl3jyMneWW2Nl0sTSajVW6sPVTyZTyImmLJ4SraNuYqiTxabNvXu3VwdU06guDco4HZqL3juI5jl5WJ11knfE7jcMlO0WnrLGWSKbCUWEusspukC+2NX0NM+Y8uYkvbF37VMA5qkGvRUIoJ1q30pnx/a8r85CCkqQRxE2DD1hUW/vHcZW1IvGpInSzxlZnYsxuzEsxPEsxuSfG5JlIoSNDbxlWrRKnXh3y0r0gxv1pHgCAJZCmmAfnWY+hH/AFSrTwdiCXY28ZTGHU6dYx+0JXpgKLC/qbwKt5ebLwzOwyqWJOVQBcljpYDmeXrLOhTLGw9T3CSh0XbBzOcSw7FO60/FyO03jYH3t4St7eMbTEbloGzOi3amKrF6tIYdGa5eqykheQVFJJIFhrYeMn7d7ZCYTD0sMhJWmoW54mw4m0yMTgtkm3baI0RESiSIiAiIgIiICIiAiIgIiIFjtnZNLFUjSrLmU6jvVuTKeRH8aSFN79y62DJa2eiT2agHDuDj6J+B5dwnmeXQEEEAgixB1BB4giaY8s0/pW1duW2S0+Wk1bx9GVCrd8M3Ut9Qi9M+Q4p6XHhI72vuTjsP7VBmX61Ptr59nUDzAnZXLW3Us5rMNZtPhWViljY6EcRzE+ZZoqtXpz1ha5ptceo7xK5WeGo90DKjJVTUBlPEHkfEd8s6+zLewiEdxsD8pa0iyG6m34+cyNLaI+kLeXCSLMYVhwp28hK9HAsfa0+czGz8NUrm1GnUqfuI5A82AsPUzctidHVZyGxLCkv1VIaofC/sr56+Upa9a9ymImWubq7uPiagpUwQgsaj/VH4seQ/AGTdgMGlGmtKmLIgsB+feTxv4zxszZ1LD0xSooFUchxJ5ljxJ8TLqcWXL5z+Gta6IiJksREQEREBERAREQEREBERAREQEREBERAtsXgKNX+lpU3/AH1VvmJjau5+z29rA4U+dKn+UzcSYmYNMGu52zhwwOF/waf5Som6uAHDBYUf3NP8pmIk+U/KNQxY3bwX/wBTDf4VP8pVo7EwqG6Yagp71poPkJfxI3KdPgE+xEgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiB//2Q=="
            alt=""
          />

          <div className='bg-amber-300 px-3 py-2 flex justify-between text-sm font-semibold'>
            <p>BT Calling</p>
            <p>⭐ 4.9</p>
          </div>

    <div className='ml-3.5'>
            <h3 className='font-semibold mt-5 mb-2'>boAt Airdopes 161</h3>
            <p>..................................................</p>

            <p className='mt-2 font-semibold'>₹899</p>

            <div className='flex gap-3'>
              <p className='text-sm line-through text-gray-500'>₹2,499</p>
              <p className='text-sm text-green-500 font-semibold'>64% off</p>
            </div>
          </div>
        </div>
   
   
    </div>
   
{/* Card 3 */ }

   <div className='h-[360px] bg-white w-60 rounded-2xl shadow-2xl mt-8'>
        <div className='w-60'>
          <img
            className='rounded-t-lg h-40 w-60'
            src="data:image/png;base64,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"
            alt=""
          />

          <div className='bg-amber-300 px-3 py-2 flex justify-between text-sm font-semibold'>
            <p>40 Hours Playback</p>
            <p>⭐ 4.7</p>
          </div>

    <div className='ml-3.5'>
            <h3 className='font-semibold mt-5 mb-2'>boAt Rockerz 110 </h3>
            <p>..................................................</p>

            <p className='mt-2 font-semibold'>₹899</p>

            <div className='flex gap-3'>
              <p className='text-sm line-through text-gray-500'>₹2,499</p>
              <p className='text-sm text-green-500 font-semibold'>64% off</p>
            </div>
          </div>
        </div>
  </div>



   
{/* Card 3*/ }
    <div className='h-[360px] bg-white w-60 rounded-2xl shadow-2xl mt-8'>
        <div className='w-60'>
          <img
            className='rounded-t-lg h-40 w-60'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1BOCX7dZYJiCCZGsE5KApH1MhBcqOsWVaxQ&s"
            alt=""
          />

          <div className='bg-amber-300 px-3 py-2 flex justify-between text-sm font-semibold'>
            <p>40 Hours Playback</p>
            <p>⭐ 4.8</p>
          </div>

    <div className='ml-3.5'>
            <h3 className='font-semibold mt-5 mb-2'>boAt Airdopes Prime 701 ANC </h3>
            <p>..................................................</p>

            <p className='mt-2 font-semibold'>₹899</p>

            <div className='flex gap-3'>
              <p className='text-sm line-through text-gray-500'>₹2,499</p>
              <p className='text-sm text-green-500 font-semibold'>64% off</p>
            </div>
          </div>
        </div>
    </div>



   
{/* Card 4 */ }
 <div className='h-[360px] bg-white w-60 rounded-2xl shadow-2xl mt-8'>
        <div className='w-60'>
          <img
            className='rounded-t-lg h-40 w-60'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJEcO84F8CJz7kXDtnC--KxbB20DGUMgxzQw&s"
            alt=""
          />

          <div className='bg-amber-300 px-3 py-2 flex justify-between text-sm font-semibold'>
            <p>80 Hours Playback</p>
            <p>⭐ 4.6</p>
          </div>

    <div className='ml-3.5'>
            <h3 className='font-semibold mt-5 mb-2'>boAt Airdopes 161</h3>
            <p>..................................................</p>

            <p className='mt-2 font-semibold'>₹2,799</p>

            <div className='flex gap-3'>
              <p className='text-sm line-through text-gray-500'>₹8,999</p>
              <p className='text-sm text-green-500 font-semibold'>69% off</p>
            </div>
          </div>
        </div>
    </div>


   
{/* Card 5*/ }
     <div className='h-[360px] bg-white w-60 rounded-2xl shadow-2xl mt-8'>
        <div className='w-60'>
          <img
            className='rounded-t-lg h-40 w-60'
            src="data:image/jpeg;base64,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"
            alt=""
          />

          <div className='bg-amber-300 px-3 py-2 flex justify-between text-sm font-semibold'>
            <p>10000mAh Power Bank</p>
            <p>⭐ 4.6</p>
          </div>

    <div className='ml-3.5'>
            <h3 className='font-semibold mt-5 mb-2'>Energy Shroom PB300</h3>
            <p>..................................................</p>

            <p className='mt-2 font-semibold'>₹1,199</p>

            <div className='flex gap-3'>
              <p className='text-sm line-through text-gray-500'>₹2,499</p>
              <p className='text-sm text-green-500 font-semibold'>60% off</p>
            </div>
          </div>
        </div>
    </div>








    </div>
  )
}

export default BoatCards