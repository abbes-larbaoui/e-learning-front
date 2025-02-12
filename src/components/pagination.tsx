import { Button, IconButton } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface PaginationProps {
    skip: number;
    take: number;
    totalElements: number;
    setSkip: (skip: number) => void;
}

export default function Pagination({ skip, take, totalElements, setSkip }: PaginationProps) {
    const totalPages = Math.ceil(totalElements / take);
    const currentPage = skip / take;
    const maxVisiblePages = 1; // Number of pages to show around the current page

    const getPaginationButtons = () => {
        const pages: (number | string)[] = [];

        for (let i = 0; i < totalPages; i++) {
            if (
                i === 0 || // First page
                i === totalPages - 1 || // Last page
                (i >= currentPage - maxVisiblePages && i <= currentPage + maxVisiblePages) // Pages near current
            ) {
                pages.push(i);
            } else if (pages[pages.length - 1] !== "...") {
                pages.push("...");
            }
        }

        return pages;
    };

    return (
        totalPages > 1 && (
            <div className="flex justify-center mt-6 items-center gap-2">
                <IconButton
                    variant="text"
                    disabled={skip === 0}
                    onClick={() => setSkip(Math.max(skip - take, 0))}
                >
                    <ChevronLeftIcon className="h-6 w-6" />
                </IconButton>

                {getPaginationButtons().map((page, index) =>
                    page === "..." ? (
                        <span key={index} className="px-2 text-gray-500">...</span>
                    ) : (
                        <Button
                            key={index}
                            variant={currentPage === page ? "filled" : "outlined"}
                            color="black"
                            size="sm"
                            onClick={() => setSkip(page as number * take)}
                        >
                            {page as number + 1}
                        </Button>
                    )
                )}

                <IconButton
                    variant="text"
                    disabled={skip + take >= totalElements}
                    onClick={() => setSkip(Math.min(skip + take, totalElements - take))}
                >
                    <ChevronRightIcon className="h-6 w-6" />
                </IconButton>
            </div>
        )
    );
}
