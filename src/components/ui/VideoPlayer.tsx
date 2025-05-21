
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  videoType?: "landscape" | "vertical"; // Add video type prop
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  isOpen,
  onClose,
  title,
  description,
  videoType = "landscape", // Default to landscape
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={cn(
        "sm:max-w-[600px]",
        videoType === "vertical" && "sm:max-w-[400px]"
      )}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && (
            <p className="text-sm text-gray-500">{description}</p>
          )}
        </DialogHeader>
        
        <div className="mt-4">
          {videoType === "vertical" ? (
            // Vertical mobile-view video container (9:16 ratio)
            <AspectRatio ratio={9/16} className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 flex items-center justify-center">
                  <div className={cn(
                    "w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center",
                    "transform transition-all duration-300",
                    isPlaying ? "scale-90" : "scale-100"
                  )}>
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </div>
                </div>
                
                {/* Video placeholder - statistics-themed gradient */}
                <div className="w-full h-full bg-gradient-to-br from-blue-700 to-purple-900 flex flex-col items-center justify-center p-4">
                  <div className="w-full flex justify-between mb-6">
                    <div className="h-24 w-4 bg-white/80 rounded-sm"></div>
                    <div className="h-40 w-4 bg-white/80 rounded-sm"></div>
                    <div className="h-32 w-4 bg-white/80 rounded-sm"></div>
                    <div className="h-20 w-4 bg-white/80 rounded-sm"></div>
                    <div className="h-36 w-4 bg-white/80 rounded-sm"></div>
                  </div>
                  <p className="text-white font-medium text-center mt-4">Statistics 101</p>
                  <p className="text-white/70 text-sm text-center mt-1">Understanding Data Distribution</p>
                </div>
              </div>
            </AspectRatio>
          ) : (
            // Original landscape video container (16:9 ratio)
            <div className="bg-gray-900 rounded-lg overflow-hidden aspect-video flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 flex items-center justify-center">
                <div className={cn(
                  "w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center",
                  "transform transition-all duration-300",
                  isPlaying ? "scale-90" : "scale-100"
                )}>
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-white" />
                  ) : (
                    <Play className="w-8 h-8 text-white ml-1" />
                  )}
                </div>
              </div>
              
              {/* Video thumbnail/placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900" />
            </div>
          )}
          
          {/* Video controls */}
          <div className="flex items-center justify-between mt-4 px-2">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full w-8 h-8 p-0"
                onClick={() => console.log("Skip back")}
              >
                <SkipBack className="w-4 h-4" />
              </Button>
              
              <Button
                variant="default"
                size="sm"
                className="rounded-full w-10 h-10 p-0"
                onClick={togglePlayPause}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5 ml-0.5" />
                )}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full w-8 h-8 p-0"
                onClick={() => console.log("Skip forward")}
              >
                <SkipForward className="w-4 h-4" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="rounded-full w-8 h-8 p-0"
                onClick={toggleMute}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </Button>
            </div>
            
            <div className="text-sm text-gray-500">
              00:00 / {videoType === "vertical" ? "01:30" : "05:30"}
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="w-full h-1 bg-gray-200 rounded-full mt-2">
            <div className="w-1/3 h-full bg-tutor-primary rounded-full" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPlayer;
