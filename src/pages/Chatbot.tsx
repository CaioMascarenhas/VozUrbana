import React from "react";
import { Box, Typography, TextField, IconButton, Avatar, Paper, InputAdornment } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import LogoutIcon from '@mui/icons-material/Logout';
// import '@fontsource/pacifico';

const ChatMessage = ({ text, isUser, avatar }: { text: string; isUser?: boolean; avatar?: string }) => (
  <Box display="flex" justifyContent={isUser ? "flex-end" : "flex-start"} mb={2}>
    {!isUser && <Avatar>{avatar}</Avatar>}
    <Paper
      elevation={1}
      sx={{
        px: 2,
        py: 1,
        borderRadius: 2,
        maxWidth: "60%",
        bgcolor: isUser ? "#f0f0f0" : "#ddd",
        ml: isUser ? 0 : 1,
        mr: isUser ? 1 : 0,
      }}
    >
      <Typography>{text}</Typography>
    </Paper>
    {isUser && <Avatar sx={{ visibility: "hidden" }} />} {/* Placeholder para alinhamento */}
  </Box>
);

const ChatPage = () => {
  return (
    <Box sx={{ bgcolor: "#f3f3f3", height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <Box display="flex" alignItems="center" px={2} py={1} bgcolor="#fff" boxShadow={1}>
        <img src="IconeVozUrb.png" alt="Logo" style={{ width: 130, marginRight: 8 }} />
        <Box flexGrow={1} />
        <Typography variant="body2" sx={{ mr: 1 }}>
          Cidadão
        </Typography>
        <LogoutIcon color="error" />
      </Box>

      {/* Chat area */}
      <Box flexGrow={1} px={2} py={2} overflow="auto">
        <Typography variant="h5" sx={{ fontFamily: 'Pacifico', mb: 3, fontSize:40 }}>Fala, Maceió!</Typography>
        <ChatMessage text="Mensagem do sistema." />
        <ChatMessage text="Resposta do cidadão." isUser />
        <ChatMessage text="K" avatar="K" />
      </Box>

      {/* Input */}
      <Box px={2} py={1} bgcolor="#fff" boxShadow={3}>
        <TextField
          fullWidth
          placeholder="Escreva seu texto aqui"
          variant="outlined"
          size="medium"
          sx={{
            bgcolor: "#f5f5f5",
            borderRadius: 20,
            height: "83px",
            '& .MuiOutlinedInput-root': {
              height: "100%",
              paddingRight: 0
            }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  sx={{ bgcolor: "#75CD56", color: "white", borderRadius: 20, mr: 1, width: '70px', height:'70px' }}
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Box>
    </Box>
  );
};

export default ChatPage;