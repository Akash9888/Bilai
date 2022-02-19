import { Button } from "@mui/material";
import React from "react";

function BlogButton({ button, filter }) {
    return (
        <>
            {button.map((tag, i) => {
                return (
                    <>
                        <Button
                            variant="outlined"
                            size="small"
                            sx={{ margin: "10px 10px 0px 0px" }}
                            onClick={() => {
                                filter(tag);
                            }}>
                            {tag}
                        </Button>
                    </>
                );
            })}
        </>
    );
}

export default BlogButton;
