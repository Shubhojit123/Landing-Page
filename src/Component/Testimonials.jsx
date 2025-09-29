import { Card, CardContent, Typography, Box, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    title: "Fast implimation",
    content:
      "Amazing to see how fast Instalanes platform setup. Yes, we set it up not in months, but in just 1 day, no kidding, it's a game changer!",
    author: "Director at Havells",
    role: "Director",
  },
  {
    id: 2,
    title: "Fast implimation",
    content:
      "With Instalanes platform, we spend less time managing our transportation and deliver more value to our customers.",
    author: "John Doe",
    role: "CEO",
  },
  {
    id: 3,
    title: "Fast implimation",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    author: "John Doe",
    role: "CEO",
  },
  {
    id: 4,
    title: "Fast implimation",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus.",
    author: "John Doe",
    role: "CEO",
  },
   {
    id: 2,
    title: "Fast implimation",
    content:
      "With Instalanes platform, we spend less time managing our transportation and deliver more value to our customers.",
    author: "John Doe",
    role: "CEO",
  },
   {
    id: 1,
    title: "Fast implimation",
    content:
      "Amazing to see how fast Instalanes platform setup. Yes, we set it up not in months, but in just 1 day, no kidding, it's a game changer!",
    author: "Director at Havells",
    role: "Director",
  }
];

export default function Testimonials() {
  return (
    <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
      <Typography
        variant="h5"
        sx={{ textAlign: "left", color: "blue", mb: 4 }}
      >
    
        What our Customer says
      </Typography>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <Card
              sx={{
                height: "100%", 
                display: "flex",
                flexDirection: "column",
                bgcolor: "#f7f7f7",
                p: 2,
                cursor:"grab"
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {t.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 3 }}>
                  “{t.content}”
                </Typography>
              </CardContent>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  {t.author}
                </Typography>
                <Typography variant="caption">{t.role}</Typography>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      </Container>
    </Box>
  );
}
