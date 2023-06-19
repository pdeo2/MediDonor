import { Box } from "@mui/material";

const ContactMap = () => {
	return (
		<Box
			component="div"
			sx={{
				padding: {
					xs: "16px",
					sm: "20px 0 20px 20px",
				},
				height: { xs: "350px", sm: "100%" },
			}}
		>
			<iframe
				src=""
				style={{
					border: "5px solid #fff",
					borderRadius: "12px",
					boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
				}}
				height="100%"
				width="100%"
				allowFullScreen={true}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</Box>
	);
};

export default ContactMap;
