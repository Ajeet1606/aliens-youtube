import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (

    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {/* First elemnet of stack*/}
      
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        {/* Direction row, ,first element */}
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        {/* Second element */}
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Created with 💖 by Ajeet
        </Typography>
      </Box>

      {/* Second element of stack */}
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        {/* direction row */}
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed