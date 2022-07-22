import "swiper/css/bundle";
import { Carousel } from "flowbite-react";
import peduli from "../assets/img/peludi22.png";
import sinarap from "../assets/img/SIRANAP22.png";
import blc from "../assets/img/BLC22.png";
import rumah from "../assets/img/10rumah22.png";

export default function Slide() {
  return (
    <div className='bottom-0 h-56 rounded-none sm:h-64 xl:h-80 2xl:h-96'>
      <Carousel slideInterval={5000} className='rounded-none'>
        <div className='flex h-full items-center justify-center bg-slidebg dark:bg-slidebg	 text-white'>
          <img src={peduli} className='w-3/12' alt='illustration' />
          <div>
            <h1 className='text-2xl mb-5'>PeduliLindungi</h1>
            <p>
              PeduliLindungi adalah aplikasi pelacak Covid-19 yang digunakan
              secara resmi<br></br>untuk pelacakan kontak digital di Indonesia.
              <br></br>
              Aplikasi ini dikembangkan oleh Kementerian Komunikasi dan
              Informatika<br></br>bekerja sama dengan Komite Penanganan Covid-19
              <br></br>
              dan Pemulihan Ekonomi Nasional, Kementerian Kesehatan, dan
              Kementerian BUMN.
            </p>
          </div>
        </div>
        <div className='flex h-full items-center justify-center bg-slidebg	 bg-slidebg	 text-white'>
          <img src={rumah} className='w-3/12' alt='illustration' />
          <div>
            <h1 className='text-2xl mb-5'>10 Rumah Aman</h1>
            <p>
              Aplikasi 10 Rumah Aman adalah aplikasi buatan Kantor Staf Presiden
              (KSP)<br></br>yang didukung oleh Kemenkominfo. Aplikasi ini
              berbasis teknologi<br></br>Artificial Intelligence (AI) yang mana
              ternologi tersebut dapat<br></br>menghubungkan data berbasis peta
              dan lingkungan sekitar<br></br>melalui perangkat telepon seluler
              dan terhubung dengan platform media sosial.<br></br>terdapat
              fitur-fitur yang berkaitan dengan langkah pencegahan dan
              penanganan<br></br>Covid-19, seperti pencatatan suhu tubuh secara
              berkala dalam aplikasi itu.
            </p>
          </div>
        </div>
        <div className='flex h-full items-center justify-center bg-slidebg	 bg-slidebg	 text-white'>
          <img src={blc} className='w-3/12' alt='illustration' />
          <div>
            <h1 className='text-2xl mb-5'>Bersatu Lawan COVID-19</h1>
            <p>
              Bersatu Lawan COVID-19 adalah aplikasi buatan Gugus Tugas<br></br>
              Percepatan Penanganan COVID-19. yang dibuat agar masyarakat
              <br></br>dapat mengetahui kerentanan lokasi persebaran COVID-19 di
              sekitarnya.<br></br>Selain masyarakat, aplikasi ini dapat
              digunakan oleh petugas kesehatan.<br></br>Mereka dapat melihat
              perkembangan pasien,<br></br>fitur pemeriksaan rapid diagnostic
              test atau RDT, dan data riwayat medis pasien.
            </p>
          </div>
        </div>
        <div className='flex h-full items-center justify-center bg-slidebg	 bg-slidebg	 text-white'>
          <img src={sinarap} className='w-3/12' alt='illustration' />
          <div>
            <h1 className='text-2xl mb-5'>SIRANAP RS</h1>
            <p>
              Sistem Informasi Rawat Inap Rumah Sakit Rujukan Covid-19(SIRANAP
              RS)<br></br>
              adalah aplikasi buatan Kemenkes agar masyarakat<br></br>dapat
              mengetahui tingkat keterisian RS rujukan covid-19 di berbagai RS
              tanah air<br></br>yang mana Terdapat ratusan database RS di
              seluruh penjuru tanah air<br></br>yang terdaftar dalam aplikasi
              itu. Sistem pencarian rumah sakitnya<br></br>dengan memasukan nama
              provinsi dan kabupaten/kota.
            </p>
          </div>
        </div>
        {/* <div className='flex h-full items-center justify-center bg-slidebg	 dark:bg-slidebg	 dark:text-white'>
          DokterSafe
        </div> */}
      </Carousel>
    </div>
  );
}
